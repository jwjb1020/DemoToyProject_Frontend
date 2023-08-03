import React from "react";
import "./div.css";

export const Div = ({ className }) => {
    return (
        <div className={`div ${className}`}>
            <div className="div-main-txt">
                <div className="p">
                    <div className="fesit-k">
                        <span className="text-wrapper">Fesit. 당신의 </span>
                        <span className="span">모든 K-축제</span>
                        <div className="strong-strong">
                            <div className="element-wrapper">
                                <p className="element">
                                    우리의 추억은 소중하니까,
                                    <br />
                                    당신에게 필요한 축제!
                                </p>
                            </div>
                            <p className="element-2">숙소에서 가까운 축제를 검색하고 쉽게 떠나보세요.</p>
                        </div>
                        <div className="strong-strong">
                            <div className="element-wrapper">
                                <p className="element">
                                    우리의 추억은 소중하니까,
                                    <br />
                                    당신에게 필요한 축제!
                                </p>
                            </div>
                            <p className="element-2">숙소에서 가까운 축제를 검색하고 쉽게 떠나보세요.</p>
                        </div>
                    </div>
                </div>

            </div>
            <img className="miroodles-color-comp" alt="Miroodles color comp" src="/images/miroodles-color-comp.png" />
        </div>
    );
};
