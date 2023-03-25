import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CanvasComponent } from '@/components/canvasComponent'
import { ColorBar } from '@/components/colorBar'


export default function Home() {
    return (
        <>
            <CanvasComponent />
            <ColorBar />
        </>
    )
  }