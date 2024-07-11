// import { lunarify } from '../../lib/cipher';

// export function POST(Request) {
//     if (Request.method === 'POST') {
//         const { input, mode, key } = Request.body;

//         // if (!input || !mode || !key) {
//         //     return res.status(400).json({ error: 'Invalid input or mode or key' });
//         // }
        
//         const result = lunarify(input, mode, key);
//         console.log(input)
//         console.log(mode)
//         console.log(key)
//         console.log(result)

//         return new Response('Success', {
//           status: 200,
//           headers: { 'result': result },
//         })
//     } else {
//         // res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }

import { lunarify } from '../../lib/cipher';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { input, mode, key } = req.body;

    if (!input || !mode || !key) {
      return res.status(400).json({ error: 'Invalid input or mode or key' });
    }
    
    const result = lunarify(input, mode, key);

    // Return the processed text
    return res.status(200).json({ result });
  } else {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}