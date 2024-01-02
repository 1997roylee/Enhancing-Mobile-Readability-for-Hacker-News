import Flex from '../ui/Flex';

export type HackerNewsPostLoadingProps = {
    backgroundColor: string;
};

export function HackerNewsPostLoading({ backgroundColor }: HackerNewsPostLoadingProps) {
    return (
        <Flex className='animate-pulse align-center mb-8'>
            <div className='bg-gray-200 rounded-md w-12 h-12' style={{ backgroundColor }} />
            <div className='ml-3'>
                <div className='bg-gray-200 w-48 mb-3 rounded-md h-4' style={{ backgroundColor }} />
                <div className='bg-gray-200 rounded-md w-8 h-4' style={{ backgroundColor }} />
            </div>
        </Flex>
    );
}

const Colors = ['#FEE2D6', '#FDF4D6', '#EDF8D6', '#E3F5E3', '#D8ECFF', '#E6E0FF', '#FBDCF2'];

export default function HackerNewsLoadingList() {
    return (
        <div className='p-3'>
            {Colors.map((color) => (
                <HackerNewsPostLoading key={color} backgroundColor={color} />
            ))}
        </div>
    );
}
