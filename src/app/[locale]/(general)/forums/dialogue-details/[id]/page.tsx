import DialogueForumDetails from "@/components/forums/DialogueForumDetails";

export default function DialogueForumDetailsPage({params: {id}}: {params: {id: string }}) {

    return (
        <DialogueForumDetails id={id} />
    );
}
