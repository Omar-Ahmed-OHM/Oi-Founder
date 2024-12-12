import Image from "next/image"
import logo from '../../../public/asset/images/logo.svg'
import person from '../../../public/asset/images/admin profile.jpg'
export default function DashNav(){
    return(
        <>
        <section className="bg-bg-dash-board static top-0 border-[1px] border-gray-500 shadow-xl">
            <nav className="flex justify-between items-center p-12">
                <div className="logo pr-10">
                    <Image src={logo} alt="logo" width={150}/>
                </div>

                <div className="profile flex items-center gap-2 bg-card-color  rounded-[34px] p-3  min-w-[250px]  justify-center">
                    <div>
                    <Image src={person} alt="person" width={50} className="rounded-[50%] h-[50px]"/>
                    </div>
                    <div className="profile_name">
                        <p className="bg-text-gradient bg-clip-text text-xl font-semibold text-transparent">
                            Omar Ahmed
                        </p>
                    </div>
                </div>
            </nav>
        </section>
        </>
    )
}