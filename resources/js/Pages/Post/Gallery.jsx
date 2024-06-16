import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';

const Gallery = (props) => {
    const { contents, sortField,sortOrder } = usePage().props;
    const handleSort = (field) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';/*if文*/
        Inertia.visit(`/gallery`, { /*オーダーの中身を送っている？*/
            method: 'get',
            data: { sort_field: field, sort_order: order },
        });
    };
    
    return (
        <Authenticated auth={props.auth} header={
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">作成画面</h2>
                <button
                    className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    onClick={()=>{console.log('コンテンツ一覧に戻る')}}>
                        コンテンツ一覧
                </button>
                <button onClick={() => handleSort('name')}>
                    Name {sortField === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
                </button>
            </div>
        }>
            <div className="p-12">
                {contents && contents.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4">
                        {contents.map(content => (
                            <div key={content.id} className="flex flex-col items-center">
                                <img src={content.top_url} alt="Image" className="mb-4 w-full h-48 object-cover" />
                                <h2>{content.name}</h2>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No Image</p>
                )}
            </div>
        </Authenticated>
    );
}

export default Gallery;