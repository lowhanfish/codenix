'use client'

import { useState } from 'react'

import { Folder, FolderOpen, File } from 'lucide-react'

type FolderProps = {
    name: string,
    folders?: FolderProps[]
}

const page = () => {

    let folders: FolderProps[] = [
        {
            name: "Home",
            folders: [
                {
                    name: 'Movies',
                    folders: [
                        {
                            name: 'Actions',
                            folders: [
                                { name: '2010s', folders: [] },
                                { name: '2020s', folders: [] },
                            ]
                        },
                        { name: 'Commedy', folders: [] },
                    ]
                },
                {
                    name: 'Music',
                    folders: [
                        { name: 'Rock', folders: [] },
                        { name: 'Pop', folders: [] },
                        { name: 'Pop', folders: [] },
                    ]
                },
                { name: 'Pictures', folders: [] },
                {
                    name: 'Documents',
                    folders: [
                        { name: "Data Pembangunan.docs" },
                        { name: "Data Aplikasi.docs" },
                        { name: "Data Aplikasi.docs" },
                    ]
                }
            ]
        },
    ]

    return (
        <div className='main-layout'>
            <ul>
                <li className=''>
                    <ul className='pl-8'>
                        {
                            folders.map((data: FolderProps) => (
                                <Fodersx key={data.name} data={data} />
                            ))
                        }
                    </ul>
                </li>
            </ul>
        </div>
    )
}

const Fodersx = ({ data }: { data: FolderProps }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <li key={data.name}>
            <div className='flex'>
                {
                    data.folders ? (
                        <div onClick={() => { setIsOpen(!isOpen) }}>
                            {isOpen ? (
                                <FolderOpen className='text-primary' />
                            ) : (
                                <Folder className='text-primary' />
                            )}
                        </div>
                    ) : (
                        <File className='text-secondary' />
                    )
                }
                <span className='pl-2 text-foreground'>{data.name}</span>
            </div>

            {isOpen && (
                <ul className='pl-8'>
                    {
                        data.folders?.map((subFolder) => (
                            <Fodersx key={subFolder.name} data={subFolder} />
                        ))
                    }
                </ul>
            )}
        </li>
    )
}

export default page

