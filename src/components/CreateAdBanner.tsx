import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog'

const CreateAdBanner = () => {
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
            <div className="bg-[#2A2634] px-8 py-6 flex flex-col md:flex-row flex-li justify-between items-center">
                <div>
                    <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
                    <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
                </div>

                <Dialog.Trigger className="my-3 w-full sm:w-auto py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    );
}

export default CreateAdBanner;