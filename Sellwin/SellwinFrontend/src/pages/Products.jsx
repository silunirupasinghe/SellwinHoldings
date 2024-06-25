import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import champ from "../assets/champ.jpg";
import pico from "../assets/pico.jpg";
import sfRed from "../assets/sfRed.jpg";
import sfBlue from "../assets/sfBlue.jpg";
import tuna from "../assets/tuna.jpg";

function Products() {
    return (
        <>
            <div className="banner bg-indigo-900 text-white ">
                <h1 className=" text-4xl pt-6 text-center font-semibold pb-20">Our Products</h1>
            </div>

            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <Card className="mx-5">
                        <CardHeader>
                            <CardTitle>Champ Jack Mackerel</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={champ} alt="Champ Jack Mackerel" className="w-full h-full object-cover" />
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>MRP- Rs.690.00</p>
                        </CardFooter>
                    </Card>

                    <Card className="mx-5">
                        <CardHeader>
                            <CardTitle>Pico Mackerel</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={pico} alt="Pico" className="w-full h-full object-cover" />
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>MRP- Rs.690.00</p>
                        </CardFooter>
                    </Card>

                    <Card className="mx-5">
                        <CardHeader>
                            <CardTitle>Sothern Fresh Jack Mackerel</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={sfRed} alt="Southern Fresh Jack Mackerel" className="w-full h-full object-cover" />
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>MRP- Rs.690.00</p>
                        </CardFooter>
                    </Card>

                    <Card className="mx-5">
                        <CardHeader>
                            <CardTitle>Sea Fresh Tuna</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={tuna} alt="Sea Fresh Tuna" className="w-full h-full object-cover" />
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>MRP- Rs.690.00</p>
                        </CardFooter>
                    </Card>

                    <Card className="mx-5">
                        <CardHeader>
                            <CardTitle>Sothern Fresh Jack Mackerel</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={sfBlue} alt="Southern Fresh Jack Mackerel" className="w-full h-full object-cover" />
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>MRP- Rs.690.00</p>
                        </CardFooter>
                    </Card>

                    <Card className="mx-5">
                        <CardHeader>
                            <CardTitle>Sea Fresh Mackerel</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={sfBlue} alt="Sea Fresh Mackerel" className="w-full h-full object-cover" />
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>MRP- Rs.690.00</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Products;
