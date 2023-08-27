import Swal from "sweetalert2";
import LogoutComponent from '@/components/LogoutComponent';
import SideBar from '@/components/sidebar/SideBar';

export default {
    data: () => ({
        Toast: Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
    }),
    methods: {
        
    },
    components: {
        LogoutComponent,
        SideBar    
    }
}