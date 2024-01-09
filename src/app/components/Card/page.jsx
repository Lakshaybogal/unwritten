import Image from 'next/image';
import Link from 'next/link';

const Card = ({ postData }) => {
    const { author, publishedAt, title, body, categories, _id, image } = postData;
    const body1 = body.split(" ").slice(0, 20).join(' ');
   
    return (
        <Link href={`/Blog/${_id}`}>
            <div className='flex flex-col w-[30vw] gap-1'>
                <div className='flex h-[30vh] flex-col space-y-2 bg-blue-700 rounded overflow-hidden'>
                    <Image
                        src={image}
                        layout='responsive'
                        width={100}
                        height={100}
                        alt='Loading'
                    />
                </div>
                    <h1 className='font-bold text-2xl py-2'>{title}</h1>
                    <p className='font-semibold'>
                        {author.name}, {new Date(publishedAt).toDateString()}
                    </p>
                <div>
                    <p>{body1} more....</p>
                </div>
                <div className='flex'>
                    {categories.map((category) => (
                        <div key={category._id}>
                            <span className='text-blue-600 p-1 font-bold'>{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default Card;
