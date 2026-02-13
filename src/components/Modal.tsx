'use client'

import { useEffect } from "react";
import CrossIcon from "@/assets/icons/CrossIcon";
import { useGeneralContext } from "@/context/GeneralContext";

export default function Modal() {
    const { modal, setModal } = useGeneralContext();

    function handleCloseModal() {
        if (!modal) return;
        if (modal?.onClose) {
            modal.onClose();
        }

        setModal({ ...modal, isOpen: false });
    }

    // disallow page scroll on modal open
    useEffect(() => {
        const wrapper = document.querySelector('.page-wrapper');

        if (!wrapper) return;

        if (modal?.isOpen) {
            wrapper.classList.add('page-scroll__disable');
        } else {
            wrapper.classList.remove('page-scroll__disable');
        }
    }, [modal?.isOpen]);

    if (!modal || !modal.isOpen) return;
    return (
        <div className="modal">
            <div className={`scrollbar-hide modal__container${modal.isFullScreen ? ' modal__container--fullscreen' : ''}`}>
                {
                    !modal.hasCloseBtn ? null :
                        <button
                            title="close button"
                            type="button"
                            onClick={handleCloseModal}
                            className="modal__button-close"
                        >
                            <CrossIcon color="#7A8399" />
                        </button>
                }
                {modal.children}
            </div>
        </div>
    )
}