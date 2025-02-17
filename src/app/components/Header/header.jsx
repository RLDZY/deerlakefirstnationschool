import React from 'react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/app/components/ui/navigation-menu"
  import { navigationMenuTriggerStyle } from "@/app/components/ui/navigation-menu"
import Link from 'next/link'

export default function header() {
  return (
<>
<div className='flex align-center'>
<NavigationMenu>
  <NavigationMenuList >
    <NavigationMenuItem>
      <NavigationMenuTrigger>About</NavigationMenuTrigger>
      <NavigationMenuContent className='px-[2rem] py-[2rem]'>

      <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    History & Mission
    </NavigationMenuLink>
    </Link><br/>
    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Vision & Values
    </NavigationMenuLink>
    </Link><br/>

    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Community Involvement
    </NavigationMenuLink>
    </Link><br/>

    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Leadership & Staff
    </NavigationMenuLink>
    </Link><br/>

    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    School Achievements
    </NavigationMenuLink>
    </Link><br/>

    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Accreditation
    </NavigationMenuLink>
    </Link><br/>
      </NavigationMenuContent>
    </NavigationMenuItem> 
  </NavigationMenuList>
  


{/* Program */}

  <NavigationMenuList >
    <NavigationMenuItem>
      <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
      <NavigationMenuContent className='px-[2rem] py-[2rem]'>

      <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Early Childhood Education
    </NavigationMenuLink>
    </Link><br/>
    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Primary School Programs
    </NavigationMenuLink>
    </Link><br/>

    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Secondary School Programs
    </NavigationMenuLink>
    </Link><br/>

    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Special Education
    </NavigationMenuLink>
    </Link><br/>

      </NavigationMenuContent>
    </NavigationMenuItem> 
  </NavigationMenuList>
  

{/* Program */}



{/* News and Update */}

  <NavigationMenuList >
    <NavigationMenuItem>
      <NavigationMenuTrigger>News & Update</NavigationMenuTrigger>
      <NavigationMenuContent className='px-[2rem] py-[2rem]'>

      <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    School News
    </NavigationMenuLink>
    </Link><br/>
    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Events Calendar
    </NavigationMenuLink>
    </Link><br/>

    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    School Newsletter
    </NavigationMenuLink>
    </Link><br/>

    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Community Highlights
    </NavigationMenuLink>
    </Link><br/>

      </NavigationMenuContent>
    </NavigationMenuItem> 
  </NavigationMenuList>
  {/* News and Update */}

{/* News and Update */}
<NavigationMenuList >
    <NavigationMenuItem>
      <NavigationMenuTrigger>Community & Partnerships</NavigationMenuTrigger>
      <NavigationMenuContent className='px-[2rem] py-[2rem]'>

      <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    School-Community Collaboration
    </NavigationMenuLink>
    </Link><br/>
    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Parent & Teacher Association-PTA
    </NavigationMenuLink>
    </Link><br/>

    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Local Businesses & Partners
    </NavigationMenuLink>
    </Link><br/>

    <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    Alumni Network
    </NavigationMenuLink>
    </Link><br/>

      </NavigationMenuContent>
    </NavigationMenuItem> 
  </NavigationMenuList>
  {/* News and Update */}


<Link href="/" className='text-sm font-normal px-2'>Contact</Link>
  
</NavigationMenu>






</div>
</>
  )
}
