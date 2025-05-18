import { assets } from "../assets/assets"

export const Footer = () => {
  return (
    <div className=" container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20 ">
        <img className="" width={160} src={assets.logo} alt="Logo" />
        <p className="flex-1 border-l border-gray-400 pl-4 text-gray-500 max-sm:hidden">Copyright @ritikKumar.xyz | All right reserved.</p>
        <div className="flex items-center gap-2.5">
           <img width={38} src={assets.facebook_icon} alt="facebook" /> 
           <img width={38} src={assets.twitter_icon} alt="twitter" />
           <img width={38} src={assets.instagram_icon} alt="instagram" />
        </div>
    </div>
  )
}
