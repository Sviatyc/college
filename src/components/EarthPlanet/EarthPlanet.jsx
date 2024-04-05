import Earth from '../../../public/Earth'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Suspense } from "react"


function EarthPlanet() {
  return (
    <div>
        <Canvas>
            <ambientLight />
            <OrbitControls enableZoom={false} rotateSpeed={0.2}/>
            <Suspense fallback={null}>
                <Earth scale={[2.5, 2.5, 2.5]}/>
            </Suspense>
        </Canvas>
    </div>
  )
}

export default EarthPlanet