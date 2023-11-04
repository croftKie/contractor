import ContractsForYou from "./partials/ContractsForYou";
import Nav from "./partials/Nav";
import RecentContracts from "./partials/RecentContracts";
import SearchHome from "./partials/SearchHome";
import { homeProps } from "../types";

export default function Home(props: homeProps) {
  return (
    <>
      <Nav />
      <SearchHome setSearch={props.setSearch} setPage={props.setPage} />
      <RecentContracts
        setSelectedJobId={props.setSelectedJobId}
        data={props.data}
        setPage={props.setPage}
      />
      <ContractsForYou
        setSelectedJobId={props.setSelectedJobId}
        data={props.data}
        setPage={props.setPage}
      />
    </>
  );
}
