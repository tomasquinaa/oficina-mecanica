import { Layout } from "../../Layout/Layout";
import { ServicoImgs } from "../../utils/exportImg";

export const Servicos = () => {
    return (
        <>
            <Layout>
                <div className="cabecalho-servicos">
                    <h2>Serviços</h2>
                </div>

                <main>
                    <section className="title-servicos">
                        <h3><small>Oficina & Laboratório DIESEL</small></h3>
                        <h2>Conheça Nossos Serviços :</h2>
                    </section>

                    <section className="servicos">
                        <ul className="servicos-prestados">
                            <li>
                                <img className="image-servico" src={ServicoImgs.correiadentada} alt="Imagem do serviço de correia dentada"/>
                                <h2>Correia dentada</h2>
                                <p>Troca da correia, esticador</p>
                            </li>

                            <li>
                                <img className="image-servico" src={ServicoImgs.cambio} alt="Imagem do serviço de câmbio"/>
                                <h2>Câmbio</h2>
                                <p>Manutenção de câmbio manual, automático, dualogic, imotion, powershift, cvt, etc. Problemas de câmbio roncando, engate de marcha, trancos, etc.</p>
                            </li>

                            <li>
                                <img className="image-servico" src={ServicoImgs.embreagem} alt="Imagem do serviço de embreagem"/>
                                <h2>Embreagem</h2>
                                <p>Troca, lavagem e lubrificação do sistema.</p>
                            </li>

                            <li>
                                <img className="image-servico" src={ServicoImgs.freio} alt="Imagem do serviço de freio"/>
                                <h2>Freio</h2>
                                <p>Manutenção em sistemas ABS, troca de pastilha, lona, fluído, retífica de disco, etc.</p>
                            </li>

                            <li>
                                <img className="image-servico" src={ServicoImgs.injecaoeletronica} alt="Imagem do serviço de injeção eletrônica"/>
                                <h2>Injeção Eletrônica</h2>
                                <p>Manutenção do sistema, projetos especiais e testes com equipamentos modernos e atualizados.</p>
                            </li>

                            <li>
                                <img className="image-servico" src={ServicoImgs.mecanicageral} alt="Imagem do serviço de mecânica geral"/>
                                <h2>Mecânica Geral</h2>
                                <p>Regulagem, retífica de motor e cabeçote para veículos e utilitários de todas as marcas, nacionais e importados.</p>
                            </li>

                            <li>
                                <img className="image-servico" src={ServicoImgs.revisao} alt="Imagem do serviço de revisão"/>
                                <h2>Revisão</h2>
                                <p>Preventiva e corretiva, identificação de panes e verificação de mais de 90 itens para veículos e utilitários de todas as marcas, nacionais e importados.</p>
                            </li>

                            <li>
                                <img className="image-servico" src={ServicoImgs.suspensao} alt="Imagem do serviço de suspensão"/>
                                <h2>Suspensão</h2>
                                <p>Amortecedor, bandeja, pivô, braço axial, mola helicoidal, etc.</p>
                            </li>

                            <li>
                                <img className="image-servico" src={ServicoImgs.trocaoleo} alt="Imagem do serviço de troca de óleo"/>
                                <h2>Troca de Óleo</h2>
                                <p>Realizada através de escoamento, com limpeza total do motor. Abastecimento de óleo sem residual em embalagens.</p>
                            </li>
                        </ul>
                    </section>
                </main>
            </Layout>
        </>
    );
}
