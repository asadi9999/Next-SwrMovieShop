'use client'
import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import Image from 'next/image'
import '../componentSwr/SwrStyle.css'

const SwrComponent
    = () => {
        const fetcher = (...args) => fetch(...args).then(res => res.json())

        //  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', axios)
        //  if (error) return <div>failed to load</div>
        //  if (!data) return <div>loading...</div>

        const { data, error } = useSWR("https://moviesapi.ir/api/v1/movies?page={page}", fetcher);
        if (error) return (<div>error on loading data</div>)
        if (!data) return (<div>Loading....plz wait</div>)
        return (
            <section className=' flex flex-col justify-center items-center gap-10 p-3'>
                <h1>data is loaded</h1>
                <div className=" flex flex-wrap max-w-max max-h-max justify-between items-center gap-6">
                    {data.data.map((mov, i) => (
                        <div className=' border-lg' id={i}>
                            <div className=" flex flex-col gap-14 justify-center items-center ">
                                <div className=" border-2 rounded-3xl">
                                    <Image unoptimized src={mov.poster} alt={mov.title} width={400} height={300} className=" bg-cover rounded-3xl" />
                                </div>
                                <div className=' flex flex-row justify-center items-center'>{mov.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

export default SwrComponent

