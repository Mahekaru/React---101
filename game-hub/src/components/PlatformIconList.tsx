import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md"
import {SiNintendoswitch} from "react-icons/si"
import {BsGlobe} from "react-icons/bs"
import { Text, Icon, HStack } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: {[key: string]: IconType} = { 
    pc: FaWindows, 
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    nintendo: SiNintendoswitch,
    playstation: FaPlaystation,
    xbox: FaXbox
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
