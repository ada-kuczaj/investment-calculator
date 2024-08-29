import logoImg from '../../public/investment-calculator-logo.png'

export default function Header() {
    return (
        <header id='header'>
            <img src={logoImg} alt='Logo showing a green sack with money' />
            <h1>Investment Calculator</h1>
        </header>
    );
}