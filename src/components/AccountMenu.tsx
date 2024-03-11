import { Building, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUserInformations } from '@/api/getUserInformations'
import { getRestaurantInformations } from '@/api/getRestaurantInformations'
import { Skeleton } from './ui/skeleton'
import { StoreProfileDialog } from './StoreProfileDialog'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'

export const AccountMenu = () => {
  const { data, isLoading: isLoadingUserInformations } = useQuery({
    queryKey: ['profile'],
    queryFn: getUserInformations,
    staleTime: Infinity,
  })
  const {
    data: restaurantInformations,
    isLoading: isLoadingRestaurantInformations,
  } = useQuery({
    queryKey: ['restaurantInformations'],
    queryFn: getRestaurantInformations,
    staleTime: Infinity,
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            {isLoadingRestaurantInformations ? (
              <Skeleton className="h-6 w-40" />
            ) : (
              restaurantInformations?.name
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingUserInformations ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            ) : (
              <>
                <span>{data?.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {data?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4" />
              <span>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem>
            <StoreProfileDialog />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/logout">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <StoreProfileDialog />
    </Dialog>
  )
}
