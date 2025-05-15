import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import {
  Login,
  Cadastro,
  Home,
  Creditos,
  Contato,
  Faq,
  SobreNos,
  NovoAgendamento,
  MeusAgendamentos,
} from "./Pages";
import AppLayout from "./Layouts/AppLayout/AppLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="novoagendamento" element={<NovoAgendamento />} />
        <Route path="meusagendamentos" element={<MeusAgendamentos />} />
        <Route path="creditos" element={<Creditos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="sobreNos" element={<SobreNos />} />
        <Route path="faq" element={<Faq />} />
      </Route>
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
