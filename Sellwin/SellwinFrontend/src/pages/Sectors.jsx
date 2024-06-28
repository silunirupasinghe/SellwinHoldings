import Services from "./Services"


function Sectors() {
    return (
        <>
            <div className="banner bg-indigo-900 text-white py-10 ">
                <h1 className="text-4xl font-semibold text-center">BUSINESS SECTORS</h1>
                <p className="mx-auto max-w-3xl text-xl my-6 text-center">
                    At Sellwin Holdings, we are proud to offer a diverse range of services that cater
                    to various sectors. Our commitment to quality and excellence drives us to deliver
                    unparalleled solutions in manufacturing, distribution, and hospitality. Here's a
                    snapshot of our core business sectors:
                </p>
            </div>
            <Services/>
            
        </>
    )
}
export default Sectors