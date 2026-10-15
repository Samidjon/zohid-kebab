'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const host = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = host.current
    if (!container) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100)
    camera.position.set(0, 0, 9)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 1.8))
    const goldLight = new THREE.PointLight(0xd9a858, 38, 25)
    goldLight.position.set(2, 2, 4)
    scene.add(goldLight)
    const greenLight = new THREE.PointLight(0x2e9474, 24, 20)
    greenLight.position.set(-3, -2, 2)
    scene.add(greenLight)

    const group = new THREE.Group()
    group.position.set(0.3, 0, 0)
    scene.add(group)
    const gold = new THREE.MeshStandardMaterial({ color: 0xc9a35d, metalness: 0.88, roughness: 0.23, emissive: 0x6d3f13, emissiveIntensity: 0.18 })
    const green = new THREE.MeshStandardMaterial({ color: 0x145b45, metalness: 0.72, roughness: 0.25, wireframe: true })
    const darkGold = new THREE.MeshStandardMaterial({ color: 0xe0c28c, metalness: 0.95, roughness: 0.2 })
    const torus = new THREE.Mesh(new THREE.TorusKnotGeometry(1.5, 0.038, 180, 12, 2, 5), gold)
    torus.rotation.set(0.4, 0.2, 0.3)
    group.add(torus)
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.012, 10, 140), darkGold)
    ringA.rotation.set(1.1, 0.3, 0.2)
    group.add(ringA)
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(1.92, 0.018, 8, 100), green)
    ringB.rotation.set(0.1, 1.15, 0.8)
    group.add(ringB)
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.62, 1), new THREE.MeshStandardMaterial({ color: 0x1d624a, metalness: 0.65, roughness: 0.32, flatShading: true }))
    core.scale.set(0.88, 1.14, 0.45)
    group.add(core)

    const particleCount = 135
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 7.8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7.8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3.5
    }
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particles = new THREE.Points(particlesGeometry, new THREE.PointsMaterial({ color: 0xe6be77, size: 0.024, transparent: true, opacity: 0.72, sizeAttenuation: true }))
    scene.add(particles)

    const resize = () => {
      const width = Math.max(container.clientWidth, 1)
      const height = Math.max(container.clientHeight, 1)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    let animationFrame = 0
    let pointerX = 0
    let pointerY = 0
    const onPointer = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.45
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.24
    }
    container.addEventListener('pointermove', onPointer)
    const animate = () => {
      animationFrame = requestAnimationFrame(animate)
      if (!reduceMotion) {
        group.rotation.y += 0.0024
        group.rotation.x += (pointerY - group.rotation.x * 0.12) * 0.009
        group.rotation.z += (pointerX - group.rotation.z * 0.12) * 0.006
        torus.rotation.z += 0.0018
        ringA.rotation.y -= 0.0015
        ringB.rotation.x += 0.0011
        core.rotation.y -= 0.0025
        particles.rotation.y += 0.00018
        particles.rotation.x += 0.00012
      }
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      container.removeEventListener('pointermove', onPointer)
      resizeObserver.disconnect()
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose()
          const material = object.material
          if (Array.isArray(material)) material.forEach((entry) => entry.dispose())
          else material.dispose()
        }
      })
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="hero-scene" ref={host} aria-hidden="true" />
}
