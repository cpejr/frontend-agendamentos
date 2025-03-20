import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";

import { Login, Register, Home, Creditos, NovoAgendamento, MeusAgendamentos } from "./Pages"
import AppLayout from "./Layouts/AppLayout/AppLayout";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/"element={<AppLayout />}>
                <Route index element = {<Home />}/>
                <Route path="login" element = {<Login />}/>
                <Route path="Register" element = {<Register />}/>
                <Route path="novoagendamento" element = {<NovoAgendamento />}/>
                <Route path="meusagendamentos" element = {<MeusAgendamentos />}/>
                <Route path="creditos" element = {<Creditos />}/>
            </Route>
        </Route>
    )
)

export default function Routes (){
    return <RouterProvider router={router}/>
}