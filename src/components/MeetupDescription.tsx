"use client";

import {
  VStack,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export function MeetupDescription() {
  return (
    <VStack spacing={8} alignItems="flex-start" mb="12">
      <Text>
        Konnichiwa and Hello! Welcome to the Melbourne Coffee and Bilingual
        Exchange, a unique gathering of caffeine lovers and language
        enthusiasts.
      </Text>
      <Text>
        Hosted by Tomoyo and Dennis, our goal is to create a diverse and
        inclusive environment where people can explore the rich Melbourne coffee
        scene, make lasting friendships, and practice their English and Japanese
        language skills. We strongly believe in fostering a space where everyone
        feels comfortable sharing their experiences, engaging in enriching
        conversation, and enhancing their language proficiency in a casual
        setting.
      </Text>
      <Text>
        We are inviting up to four others to embark on a six-week journey with
        us. Each week we will visit a different coffee shop in Melbourne,
        allowing us to explore the city&apos;s best roasters, baristas, and
        brewing techniques, all while enjoying lively bilingual discussions.
      </Text>
      <Heading as="h3">This meetup is suitable for:</Heading>
      <UnorderedList>
        <ListItem>English speakers who are learning Japanese.</ListItem>
        <ListItem>Japanese speakers who are learning English.</ListItem>
        <ListItem>
          Anyone interested in exploring Melbourne&apos;s coffee scene and
          making new friends.
        </ListItem>
      </UnorderedList>
      <Heading as="h3">What to expect:</Heading>
      <UnorderedList>
        <ListItem>
          An upfront payment of $35. This will cover your coffee for all six
          meetups.
        </ListItem>
        <ListItem>
          A chance to make new friends who share a love for coffee and language
          learning.
        </ListItem>
        <ListItem>
          Opportunities to explore the local coffee scene in Melbourne.
        </ListItem>
        <ListItem>
          Informal language practice in both English and Japanese.
        </ListItem>
      </UnorderedList>
      <Text>
        By the end of the six weeks, we hope you&apos;ll have formed new
        friendships, discovered great coffee spots, and improved your language
        skills. If successful, we will either continue the meetups or encourage
        the ongoing friendships formed within the group.
      </Text>
      <Text>
        Whether you are new to Melbourne, or have been here for years, we would
        love to meet you and share in this experience together. We&apos;re
        excited to embark on this journey of friendship, language learning, and
        coffee appreciation. Join us and let&apos;s make this the start of
        something special!
      </Text>
      <Text>We will post a list of the cafes soon.</Text>
      <Text>Yoroshiku onegaishimasu! See you soon!</Text>
    </VStack>
  );
}
