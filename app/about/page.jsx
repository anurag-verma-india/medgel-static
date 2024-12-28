import Image from "next/image";

export default function Page() {
    return (
        <div className="about-container">
            <Image
                width={1280}
                height={763}
                src="/architecture.jpg"
                className="w-full h-80 object-cover overflow-hidden"
            />
            {/* <div className="medgel-about-image-container">
                <Image
                    src="/medgel-main-photo.png"
                    alt="Medgel"
                    width={284 * 3}
                    height={510 * 3}
                    class="medgel-about-image"
                />
            </div> */}
            <h2 className=" text-medgel-blue text-6xl font-bold mt-10">
                About Us
            </h2>
            <p className="mt-5">Driven by Science, Inspired by Patients</p>

            <section className="flex flex-col mt-10 w-3/4 h-1/2 rounded-3xl shadow-2xl border-1 border-black lg:flex-row">
                <div className="ml-20 w-1/2 h-full flex flex-col">
                    <h1 className="text-5xl font-bold p-5">Overview</h1>
                    <p className="mx-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure
                    </p>
                    <button className="mt-10 mx-5 h-10 bg-medgel-blue w-1/2 text-2xl rounded-xl">
                        Explore
                    </button>
                </div>
                <div className="mr-20 w-1/2 h-full">
                    <Image
                        src="/capsules.jpg"
                        width={1280}
                        height={853}
                        className="rounded-3xl"
                    ></Image>
                </div>
            </section>
            <div className="w-full h-10" />
            <section className="flex flex-row mt-10 w-3/4 h-1/2 rounded-3xl shadow-2xl border-1 border-black">
                <div className="mr-20 w-1/2 h-full">
                    <Image
                        src="/capsules.jpg"
                        width={1280}
                        height={853}
                        className="rounded-3xl"
                    ></Image>
                </div>
                <div className="ml-20 w-1/2 h-full  flex flex-col">
                    <h1 className="text-3xl font-bold p-5">
                        Our Values and Promise
                    </h1>
                    <p className="mx-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure
                    </p>
                    <button className="mt-10 mx-5 h-10 bg-medgel-blue w-1/2 text-2xl rounded-xl">
                        Explore
                    </button>
                </div>
            </section>
        </div>
    );
}
