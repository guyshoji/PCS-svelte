<script>
    import { T, useFrame } from '@threlte/core'
    import { Environment, interactivity, GLTF, OrbitControls, useGltf } from '@threlte/extras'
    import { spring } from 'svelte/motion' 

    const gltf = useGltf('/whiteHouse/scene.gltf')

    let rotation = 0
    let envMap
    let material
    let video
    useFrame((state, delta) => {
        rotation += delta
    })

    interactivity()
    const scale = spring(1)

</script>

<Environment path="/white.jpg" />

<T.PerspectiveCamera
  makeDefault
  position={[15, 15, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
>
<OrbitControls autoRotate autoRotateSpeed={1.0} enableDamping enableZoom={false} target={[0, 0, 0]}/>
<T.DirectionalLight position={[3, 10, 7]} />
</T.PerspectiveCamera>


<T.AmbientLight intensity={0.1}/>

<GLTF 
    url="/whiteHouse/scene.gltf" 
    position={[0, 0, 0]}
    scale={1}
    material={{'whiteHouse': material}}
/>
