import { Stack } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import Header from "./Header/Header"
import VscodeSection from "./VscodeSection"
import { useDispatch } from "react-redux"
import { isMaximizedFunc } from "../../features/WindowSlice/ResizeWindowSlice"

const DEFAULT_SIZE = { width: "70vw", height: "80vh" }

interface ProjectsWindowProps {
  id: number
  containerRef: React.RefObject<HTMLDivElement | null>
  zIndex: number
  bringToFront: (id: number) => void
  defaultPosition: { top: number; left: number }
}

const ProjectsWindow = ({
  id,
  zIndex,
  bringToFront,
  defaultPosition
}: ProjectsWindowProps) => {

  const headerRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch();
  const [isMaximized, setIsMaximized] = useState(false)

  const [position, setPosition] = useState({
    x: defaultPosition?.left ?? 150,
    y: Math.max(defaultPosition?.top ?? 100, 100)
  })

  const [size, setSize] = useState(DEFAULT_SIZE)

  const dragData = useRef({
    isDragging: false,
    offsetX: 0,
    offsetY: 0
  })

  const restoreState = useRef({
    width: DEFAULT_SIZE.width,
    height: DEFAULT_SIZE.height,
    x: position.x,
    y: position.y
  })


  const maximize = () => {
    if (isMaximized) return
    restoreState.current = {
      width: size.width,
      height: size.height,
      x: position.x,
      y: position.y
    }
    setIsMaximized(true)
  }

  const restore = () => {
    if (!isMaximized) return

    setSize({
      width: restoreState.current.width,
      height: restoreState.current.height
    })
    setPosition({
      x: restoreState.current.x,
      y: restoreState.current.y
    })

    setIsMaximized(false)
  }

  const toggleResize = () => {
    bringToFront(id)
    dispatch(isMaximizedFunc(isMaximized))
    console.log(isMaximized);
    
    isMaximized ? restore() : maximize()
  }
  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const onMouseDown = (e: MouseEvent) => {
      if (isMaximized) return
      bringToFront(id)

      dragData.current.isDragging = true
      dragData.current.offsetX = e.clientX - position.x
      dragData.current.offsetY = e.clientY - position.y
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!dragData.current.isDragging) return

      setPosition({
        x: e.clientX - dragData.current.offsetX,
        y: e.clientY - dragData.current.offsetY
      })
    }

    const onMouseUp = () => {
      dragData.current.isDragging = false
    }

    header.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    return () => {
      header.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [position, isMaximized])

  return (
    <Stack
      onClick={() => bringToFront(id)}
      sx={{
        position: isMaximized ? "fixed" : "absolute",

        top: isMaximized ? "3vh" : position.y,
        left: isMaximized ? "4vw" : position.x,

        width: isMaximized ? "96vw" : size.width,
        height: isMaximized ? "97vh" : size.height,

        backgroundColor: "white",
        boxShadow: 5,
        overflow: "hidden",
        userSelect: "none",
        zIndex
      }}
    >
      <Stack
        ref={headerRef}
        sx={{
          height: 34,
          background: "#1f1f1f",
          cursor: isMaximized ? "default" : "move",
          justifyContent: "center",
          px: 1
        }}
      >
        <Header onToggleResize={toggleResize} />
      </Stack>
      <Stack
        sx={{
          flexGrow: 1,
        }}>
          <VscodeSection />
      </Stack>
    </Stack>
  )
}

export default ProjectsWindow