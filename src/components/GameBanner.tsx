interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

const GameBanner = (props: GameBannerProps) => {
    return (
        <a href="" className="relative rounded-lg overflow-hidden">
            <img className="w-full sm:w-auto" src={props.bannerUrl} alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-card-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block">{props.title}</strong>
                <span className="text-zinc-300 text-sm block">{props.adsCount} anúncio(s)</span>
            </div>
        </a>
    );
}

export default GameBanner; 