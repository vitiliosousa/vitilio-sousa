import { googleColors } from "@/data/googleColors"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
    return(
        <section id="contato" className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                      <span style={{color: googleColors.yellow}}>Vamos</span>{' '}
                      <span style={{color: googleColors.blue}}>Conversar</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                      Interessado em trabalhar comigo? Entre em contato!
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      {[
                        { icon: Mail, label: "Email", value: "vitiliodesousa@gmail.com", color: googleColors.red },
                        { icon: Phone, label: "Telefone", value: "+258 86 318 3634", color: googleColors.blue },
                        { icon: MapPin, label: "Localização", value: "Maputo, Moçambique", color: googleColors.green }
                      ].map((contact, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div 
                            className="p-3 rounded-full"
                            style={{backgroundColor: contact.color + '15'}}
                          >
                            <contact.icon size={24} style={{color: contact.color}} />
                          </div>
                          <div>
                            <h4 className="font-semibold">{contact.label}</h4>
                            <p className="text-gray-600">{contact.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Seu nome"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Seu email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <textarea 
                          placeholder="Sua mensagem"
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                        ></textarea>
                      </div>
                      <button 
                        className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                        style={{backgroundColor: googleColors.blue}}
                      >
                        Enviar Mensagem
                      </button>
                    </div>
                  </div>
                </div>
              </section>
    )
}