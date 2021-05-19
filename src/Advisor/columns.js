import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'ProjnameTH',
    // Footer: 'First Name',
    accessor: 'projnamethai',
    sticky: 'left'
  },
  {
    Header: 'ProjNameEN',
    // Footer: 'Last Name',
    accessor: 'projnameeng',
    sticky: 'left'
  },
  // {
  //   Header: 'Date of Birth',
  //   Footer: 'Date of Birth',
  //   accessor: 'date_of_birth',
  //   Cell: ({ value }) => {
  //     return format(new Date(value), 'dd/MM/yyyy')
  //   }
  // },
  {
    Header: 'AdvId',
    // Footer: 'Country',
    accessor: 'advisor'
  },
  // {
  //   Header: 'Std Name 1',
  //   // Footer: 'Phone',
  //   accessor: 'member1firstname'
  // },
  // {
  //   Header: 'Email',
  //   Footer: 'Email',
  //   accessor: 'email'
  // },
  // {
  //   Header: 'Age',
  //   Footer: 'Age',
  //   accessor: 'age'
  // },
]

// export const GROUPED_COLUMNS = [
//   {
//     Header: 'Id',
//     Footer: 'Id',
//     accessor: 'id'
//   },
//   {
//     Header: 'Name',
//     Footer: 'Name',
//     columns: [
//       {
//         Header: 'First Name',
//         Footer: 'First Name',
//         accessor: 'first_name'
//       },
//       {
//         Header: 'Last Name',
//         Footer: 'Last Name',
//         accessor: 'last_name'
//       }
//     ]
//   },
//   {
//     Header: 'Info',
//     Footer: 'Info',
//     columns: [
//       {
//         Header: 'Date of Birth',
//         Footer: 'Date of Birth',
//         accessor: 'date_of_birth'
//       },
//       {
//         Header: 'Country',
//         Footer: 'Country',
//         accessor: 'country'
//       },
//       {
//         Header: 'Phone',
//         Footer: 'Phone',
//         accessor: 'phone'
//       }
//     ]
//   }
// ]