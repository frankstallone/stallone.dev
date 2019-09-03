---
slug: ad-blocking-with-pi-hole
date: 2019-09-02
title: '🙅‍♂️ Whole network ad blocking'
description: 'Advertisers are nosey, keep them out of your business.'
published: true
banner: './wojtek-witkowski-h7rOzTmGxWE-unsplash.jpg'
---

Article after article I read about how insidious online advertisers are. We are being tracked everywhere we go on the Internet, and off to a certain extent. I don't mind paying for services. I have been a YouTube Premium member for years. It brings me value. I pay for it. I have said I would pay for Facebook not to track every little thing I do. It's creepy, nobody likes it.

There are a slew of ad-blocking extensions for every browser out there. Some are good, some not. Watching an episode of Linus's Tech Tips the other day, "[Block EVERY Online Ad with THIS](https://www.youtube.com/watch?v=KBXTnrD_Zs4)" I became inspired. I had a couple retired Raspberry Pi 2's previously running [Rasplex](https://www.rasplex.com/) in the basement.

Within 25 minutes of [Linus's how-to article](https://linustechtips.com/main/topic/1094810-pi-hole-setup-tutorial/) I had [Pi-Hole](https://pi-hole.net/) up and running on my entire network. Pi-hole can do ad blocking for every device on your network. After I set it up I updated the [whitelists](https://github.com/anudeepND/whitelist) and [blacklists](https://v.firebog.net/hosts/lists.php).

I'll spare you rewriting an already good how-to article but I will say that it's been running on the entire network now for a week, flawlessly. The dashboard is great, I can see what has been blocked, quickly whitelist if needed, and tweak to my hearts desire. The Raspberry Pi now lives atop my switch. I couldn't be happier.
