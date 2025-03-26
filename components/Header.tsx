"use client";
import React from 'react';
import {useUser, ClerkLoaded, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
import {TrolleyIcon,PackageIcon} from "@sanity/icons";
import Link from 'next/link';
import Form from 'next/form';

function Header() {
  const { user } = useUser()
  // console.log(user);
  const  createClerkPassKey = async () =>{
    try{
      const response = await user?.createPasskey();
      console.log("the result", response);
    }catch(err){
      console.log("Error",JSON.stringify(err,null,2));
    }
  }
  return (
    <header className="flex  justify-between items-center px-4 py-2 w-full">
      {/*  Top Row */}
      <div className="flex flex-wrap justify-between items-center px-4 py-2 w-full">
        <Link
          className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
          href="/">
          Shop
        </Link>
        <Form action="/search">
          <input
            type="text"
            placeholder="Search"
            name="query"
            className="border-2 border-gray-300 rounded-lg p-2 w-full sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
          />
        </Form>
        <div className="flex  justify-between items-center m-4">
          <Link href={`/basket`} className=' bg-blue-500 flex justify-evenly  text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 m-2 items-center mt-2 sm:mt-0'>
            <TrolleyIcon className='w-6 h-6' />
            <span className='flex items-center'>My Basket</span>
          </Link>
          {/* User Area */}
          <ClerkLoaded>
            <SignedIn>
              <Link href="/orders"
                    className='flex justify-evenly bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 m-2 items-center mt-2 sm:mt-0'
              >
                <PackageIcon className='w-6 h-6' />
                <span>My Orders</span>
              </Link>
            </SignedIn>

            {user ?(<div>
              <div className='flex items-center space-x-2'>
                <UserButton />
                <div className='hidden sm:block text-xs'>
                  <p className='text-gray-400'>Welcome back</p>
                  <p className='font-bold'>{user.fullName}!</p>
                </div>
              </div>
            </div>):(<SignInButton mode="modal"/>)}
            {user?.passkeys.length === 0 && (
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 m-2 items-center mt-2 sm:mt-0'
                onClick={createClerkPassKey}
              >
                Create Passkey
              </button>
            )

            }
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}
export default Header;




