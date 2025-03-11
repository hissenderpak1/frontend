import "@fontsource/inter";

export default function Header() {
    return(
        <div className="w-full h-[100px] bg-gray-600 py-5 px-16 rounded-b-[3rem] flex justify-between items-center font-inter">
            <div className="h-[60px] flex items-center gap-10">
                <div className="flex items-center ">
                    <div className="w-[60px] h-[60px] rounded-full bg-white"></div>
                    <div className="h-[60px] flex items-center text-4xl p-6">
                        ХАШ
                    </div>
                </div>
                <div className="w-[400px] h-[60px] flex items-center">
                    <div className="p-3 text-xs">БИДНИЙ ТУХАЙ</div>
                    <div className="p-3 text-xs">ТУСЛАМЖ</div>
                </div>
            </div>
            <div className="h-[60px] flex items-center gap-5">
                <div className="py-2 px-5 bg-white rounded-full text-black text-sm">Нэвтрэх</div>
                <div className="py-2 px-5 bg-white rounded-full text-white text-sm bg-[#9747FE]">Бүртгүүлэх</div>
            </div>
        </div>
    )
}