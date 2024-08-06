import { FaHome, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export const Contat = () => {
    return (
        <>
            <div className="bg-gray-800 text-white py-6">
                <h2 className="text-center text-3xl font-bold">Contato</h2>
            </div>

            {/* conteúdo principal */}
            <main className="container mx-auto p-6">
                <section className="flex flex-col md:flex-row md:space-x-6">
                    <div className="md:w-1/2">
                        {/* Mapa de localização */}
                        <iframe
                            className="w-full h-96 border-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.3594962724455!2d-46.742928585498206!3d-23.30271195797534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee7efdc75dfd7%3A0xe6ff6bb4efb20a3c!2sOficina+Off+Road+Garage!5e0!3m2!1spt-BR!2sbr!4v1530836457887"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="md:w-1/2 space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Entre em Contato :</h2>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <FaHome className="text-xl" />
                                    <span>Rua Georgina Perreira da Silva, 315 - Franco da Rocha/SP</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaEnvelope className="text-xl" />
                                    <span>oficinaoffroadgarage@gmail.com</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaWhatsapp className="text-xl" />
                                    <span>(11) 97368-7312</span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Siga nós :</h2>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="https://www.facebook.com/oficinaoffroadgarage/?modal=admin_todo_tour">
                                        <FaFacebookF className="text-2xl hover:text-blue-600" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/oficinaoffroad/?hl=pt-br">
                                        <FaInstagram className="text-2xl hover:text-pink-600" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UC2yduuGFnH--4ajjdDb2VxQ/featured">
                                        <FaYoutube className="text-2xl hover:text-red-600" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <form action="https://formspree.io/oficinaoffroadgarage@gmail.com" className="space-y-4">
                            <div>
                                <label className="block text-lg">Nome:</label>
                                <input type="text" name="nome" className="w-full p-2 border border-gray-300 rounded" required />
                            </div>
                            <div>
                                <label className="block text-lg">Email:</label>
                                <input type="email" name="email" className="w-full p-2 border border-gray-300 rounded" placeholder="exemplo@gmail.com" required />
                            </div>
                            <div>
                                <label className="block text-lg">Telefone:</label>
                                <input type="tel" name="telefone" className="w-full p-2 border border-gray-300 rounded" placeholder="(XX) XXXXX - XXXX" required />
                            </div>
                            <div>
                                <label className="block text-lg">Mensagem:</label>
                                <textarea name="mensagem" className="w-full p-2 border border-gray-300 rounded" rows="5"></textarea>
                            </div>
                            <input type="submit" className="w-full p-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700" value="Enviar" />
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};
