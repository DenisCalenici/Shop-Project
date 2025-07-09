import React from 'react'
import s from '../welcome.module.css'

const CeoProduct = () => {
    return (<div>
        <div className={s.ceo_product}>
            <div className={s.product_block}>
                <h3 className={s.ceo_product_h3}>
                    Eget quis quam metus, scelerisque.
                </h3>
                <div className={s.ceo_product_text}>
                    Odio felis sit leo, massa, mauris, at pulvinar
                    ultrices. Eu porttitor molestie massa porttitor.
                    Quisque at turpis ut proin eu et magna etiam
                    rhoncus.
                    <ul className={s.ul_text_pc}>
                        <li className={s.li_text_pc}>
                            <input className={s.input_text_pc} type="checkbox" />
                            <p className={s.p_pc}>Межкомнатую дверь</p>
                        </li>
                        <li className={s.li_text_pc}>
                            <input className={s.input_text_pc} type="checkbox" />
                            <p className={s.p_text_pc}>Деревянную дверь</p>
                        </li>
                        <li className={s.li_text_pc_2}>
                            <input type="checkbox" />
                            <p className={s.p_text_pc}>Межкомнатую дверь</p>
                        </li>
                        <li className={s.li_text_pc_3}>
                            <input type="checkbox" />
                            <p className={s.p_text_pc}>Деревянную дверь</p>
                        </li>
                    </ul>
                </div>
                <div className={s.ceo_product_text}>
                    Ac risus neque pulvinar tincidunt est. Tristique
                    imperdiet viverra interdum in leo. Nullam
                    ullamcorper id enim fermentum integer praesent
                    bibendum. In ullamcorper purus scelerisque
                    malesuada et egestas. Ac dictumst mauris sed
                    facilisis.
                </div>
            </div>
            <div className={s.product_block}>
                <img className={s.product_block} src="app/img/white-3.png" />
            </div>
            <div className={s.product_block}>
                <img className={s.product_block} src="app/img/white-2.png" />
            </div>
            <div className={s.product_block}>
                <h3 className={s.ceo_product_h3}>
                    Eget quis quam metus, scelerisque.
                </h3>
                <div className={s.ceo_product_text}>
                    Odio felis sit leo, massa, mauris, at pulvinar
                    ultrices. Eu porttitor molestie massa porttitor.
                    Quisque at turpis ut proin eu et magna etiam
                    rhoncus.
                </div>
                <div className={s.ceo_product_text}>
                    Ac risus neque pulvinar tincidunt est. Tristique
                    imperdiet viverra interdum in leo. Nullam
                    ullamcorper id enim fermentum integer praesent
                    bibendum. In ullamcorper purus scelerisque
                    malesuada et egestas. Ac dictumst mauris sed
                    facilisis.
                </div>
            </div>
        </div>
        <div className={s.ceo_product_mobile}>
            <div className={s.ceo_product_mobile_block}>
                <div className={s.product_block_mobile}>
                    <div className={s.product_block_mobile}>
                        <img className={s.product_block_mobile} src="app/img/white-3.png" />
                    </div>
                    <h3 className={s.ceo_product_h3_mobile}>
                        Eget quis quam metus, scelerisque.
                    </h3>
                    <div className={s.ceo_product_text_mobile}>
                        Odio felis sit leo, massa, mauris, at pulvinar
                        ultrices. Eu porttitor molestie massa porttitor.
                        Quisque at turpis ut proin eu et magna etiam
                        rhoncus.
                        <ul className={s.ul_text_mobile}>
                            <li className={s.li_text_mobile}>
                                <input type="checkbox" />
                                <p className={s.p_text_mobile}> Межкомнатую дверь</p>
                            </li>
                            <li className={s.li_text_mobile}>
                                <input type="checkbox" />
                                <p className={s.p_text_mobile} >Деревянную дверь</p>
                            </li>
                            <li className={s.li_text_mobile}>
                                <input type="checkbox" />
                                <p className={s.p_text_mobile}>Межкомнатую дверь</p>
                            </li>
                            <li className={s.li_text_mobile}>
                                <input type="checkbox" />
                                <p className={s.p_text_mobile}>Деревянную дверь</p>
                            </li>
                        </ul>
                    </div>
                    <div className={s.ceo_product_text_mobile}>
                        Ac risus neque pulvinar tincidunt est. Tristique
                        imperdiet viverra interdum in leo. Nullam
                        ullamcorper id enim fermentum integer praesent
                        bibendum. In ullamcorper purus scelerisque
                        malesuada et egestas. Ac dictumst mauris sed
                        facilisis.
                    </div>
                </div>
                <div className={s.product_block_mobile}>
                    <img className={s.product_block_mobile} src="app/img/white-2.png" />
                </div>
                <div className={s.product_block_mobile}>
                    <h3 className={s.ceo_product_h3_mobile}>
                        Eget quis quam metus, scelerisque.
                    </h3>
                    <div className={s.ceo_product_text_mobile}>
                        Odio felis sit leo, massa, mauris, at pulvinar
                        ultrices. Eu porttitor molestie massa porttitor.
                        Quisque at turpis ut proin eu et magna etiam
                        rhoncus.
                    </div>
                    <div className={s.ceo_product_text_mobile}>
                        Ac risus neque pulvinar tincidunt est. Tristique
                        imperdiet viverra interdum in leo. Nullam
                        ullamcorper id enim fermentum integer praesent
                        bibendum. In ullamcorper purus scelerisque
                        malesuada et egestas. Ac dictumst mauris sed
                        facilisis.
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default CeoProduct


