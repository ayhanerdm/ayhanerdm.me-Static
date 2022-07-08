export const OpenModal = (Modal) => {
    Modal.showModal();
    const ModalID = Modal.getAttribute('id');
    console.log(ModalID + ' ID\'li modal açıldı.');
};
export const CloseModal = (Modal) => {
    Modal.close();
    const ModalID = Modal.getAttribute('id');
    console.log(ModalID + ' ID\'li modal kapatıldı.');
};
//# sourceMappingURL=Modal.js.map