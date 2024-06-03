import { useRef } from 'react';

const CopyText = () => {
    const textRef = useRef(null);

    const copyToClipboard = () => {
        const textToCopy = textRef.current.innerText;

        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Copié dans le presse papier : " + textToCopy);
        }).catch(err => {
            console.error("Échec de la copie : ", err);
        });
    };

    return (
        <div>
            <div id="texte-a-copier" ref={textRef} hidden>
                sttjs80@gmail.com.
            </div>
            <button className='button_color_blue copy_text' onClick={copyToClipboard}> sttjs80@gmail.com </button>
        </div>
    );
};

export default CopyText;
