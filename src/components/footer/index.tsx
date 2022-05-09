import React from 'react';
import '../../index.css';

const footer: React.FC = () => {
  return (
    <>
      <div className='absolute bottom-0 '>
      <img src="images/canva-left.png" alt="Imagem footer esquerda" />
        <div className='absolute bottom-3 left-5'>
          <h1 className='mb-1'>Mudar idioma</h1>
          <ul className="flex gap-3">
            <li className="li-link-hover"><img src="images/Brazil.png" alt="Brazil flag" /></li>
            <li className="li-link-hover"><img src="images/USA.png" alt="USA flag" /></li>
            <li className="li-link-hover"><img src="images/Spain.png" alt="Spain flag" /></li>
            <li className="li-link-hover"><img src="images/Ukraine.png" alt="Ukraine flag" /></li>
            <li className="li-link-hover"><img src="images/China.png" alt="China flag" /></li>
          </ul>
        </div>
      </div>
      
      <div className='absolute bottom-0 right-0'>
        <img src="images/canva-right.png" alt="Imagem footer direita" />
        <ul className="flex gap-5 absolute bottom-3 right-20">
          <li className="li-link-hover"><a className="a-link-hover" href="#">Suporte</a></li>
          <li className="li-link-hover"><a className="a-link-hover" href="#">Newsletter</a></li>
          <li className="li-link-hover"><a className="a-link-hover" href="#">Doar</a></li>
          <li className="li-link-hover"><a className="a-link-hover" href="#">Quem somos</a></li>
        </ul>
      </div>
    </>
  );
}

export default footer;