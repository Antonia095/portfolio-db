
const Curriculo = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
            <h1>Currículo</h1>
            <iframe
            src="/Curriculo.pdf"
            title="Currículo PDF"
            width="80%"
            height="700px"
            style={{ border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            />
        </div>
    );
};

export default Curriculo;
