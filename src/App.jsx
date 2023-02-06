import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header,MainContaier,CreateContainer } from "./components";
import {AnimatePresence} from 'framer-motion'


const App = () => (
    <AnimatePresence>
    <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-24 p-8 w-full">
            <Routes>
                <Route path="/*" element={<MainContaier />} />
                <Route path="/createItem" element={<CreateContainer/>} />
            </Routes> 
        </main>
    </div>
    </AnimatePresence>
)

export default App;