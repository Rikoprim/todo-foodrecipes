import MaterialPage from "@/components/MaterialPage";
import NewMaterialPage from "@/components/NewMaterialPage";
import ProsedurePage from "@/components/ProsedurePage";
import TitlePage from "@/components/TitlePage";

export default function Home() {
  return (
    <div className="w-2/3 bg-white rounded shadow-2xl p-8 m-4">
      <div className="flex text-center">
        <div className="w-1/2">
          <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            List Bahan-bahan
          </h1>
          <MaterialPage />
        </div>
        <div className="w-1/2">
          <TitlePage />
          <div className="text-left">
            <h1 className="block w-full text-center text-gray-800 text-lg font-bold mb-6">
              Bahan:
            </h1>
            <NewMaterialPage />
            <h1 className="block w-full mt-6 text-center text-gray-800 text-lg font-bold mb-6">
              Tata Cara:
            </h1>
            <ProsedurePage />
          </div>
        </div>
      </div>
    </div>
  );
}
