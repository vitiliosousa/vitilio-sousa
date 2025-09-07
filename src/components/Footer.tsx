import { googleColors } from "@/data/googleColors"
export default function Footer() {
    return(
        <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <div className="text-2xl font-bold mb-4">
                    <span style={{color: googleColors.yellow}}>{"<"}</span>
                    <span style={{color: googleColors.blue}}>Vitilio</span>
                    <span style={{color: googleColors.red}}>Sousa</span>
                    <span style={{color: googleColors.green}}>{"/>"}</span>
                  </div>
                  <p className="text-white">
                    © 2025 VitilioSousa. Todos os direitos reservados.
                  </p>
                </div>
              </footer>
    )
}