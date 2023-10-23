import { Button } from './ui/button'
import { HiSaveAs } from 'react-icons/hi'

function SaveFormBtn() {
  return (
    <Button variant={'outline'} className="gap-2">
      <HiSaveAs className="h-4 w-4" />
      Safe
    </Button>
  )
}
export default SaveFormBtn
