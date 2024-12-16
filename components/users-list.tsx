'use client'

const UsersList = ({ data, onCardClick }: any) => {
    return (
        <div className='flex items-end bg-cover bg-center bg-no-repeat px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-slate-500 cursor-pointer h-36'
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),url(${data.photos[0]})` }} onClick={() => onCardClick(data)}>
            <span className="text-white text-xs font-semibold">{data.name}, {data.age}</span>
        </div>
    )
}

export default UsersList