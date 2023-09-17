import LongButton from "@/components/LongButton";
import NeumourList from "@/components/NeumorList";

const Page = () => {
    const userList = ["john", "jane", "james", "judy", "jake", "jill", "josh", "jessica", "jackson", "jennifer", "jordan", "julie", "jim", "julian", "juliet", "joseph", "jose", "julio", "juliana", "julius", "juliette", "julianne", "ju"]
    return (
        <>
            <h1>Init Room</h1>
            <NeumourList listItems={userList} />
            <LongButton text="ルーム決定" />
        </>
    );
}

export default Page;