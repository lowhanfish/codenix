import React from 'react'

import { Folder } from 'lucide-react'

type FolderProps = {
    name: string,
    folders?: FolderProps[]
}



const page = () => {

    let folders: FolderProps[] = [
        {
            name: 'Movies',
            folders: [
                {
                    name: 'Actions',
                    folders: [
                        { name: '2010s' },
                        { name: '2020s' },
                    ]
                },
                {
                    name: 'Commedy'
                },
            ]
        },
        {
            name: 'Music',
            folders: [
                {
                    name: 'Rock',
                    folders: [
                        { name: "Power Metal" },
                        { name: "Jamrud" },
                    ]
                },
                {
                    name: 'Pop',
                    folders: [
                        { name: "Iwan False" },
                        { name: "Ebiet G Ade" },
                    ]
                },
            ]
        },
        {
            name: 'Pictures'
        },
        {
            name: 'Documents'
        }
    ]


    return (
        <div className='main-layout'>
            <ul>
                <li className=''>
                    <div className='flex'>
                        <Folder />
                        <span className='pl-2'>Home</span>
                    </div>

                    <ul className='pl-8'>
                        {

                            folders.map((folder: FolderProps) => (

                                <li key={folder.name}>
                                    <div className='flex'>
                                        <Folder />
                                        <span className='pl-2'>{folder.name}</span>
                                    </div>
                                    <ul className='pl-8'>
                                        {
                                            folder.folders?.map((subFolder: FolderProps) => (
                                                <Fodersx key={subFolder.name} data={subFolder} />
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>

                </li>
            </ul>
        </div>
    )
}



const Fodersx = ({ data }: { data: FolderProps }) => {
    return (
        <li key={data.name}>
            <div className='flex'>
                <Folder />
                <span className='pl-2'>{data.name}</span>
            </div>
            <ul className='pl-8'>
                {
                    data.folders?.map((subFolder: FolderProps) => (
                        <Fodersx key={subFolder.name} data={subFolder} />
                    ))
                }
            </ul>
        </li>
    )
}

export default page
