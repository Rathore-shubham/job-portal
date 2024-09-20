
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);
const supabaseClient = (token) => {
  return createClient(supabaseUrl, supabaseKey, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// export default supabase;
export { supabaseUrl };
export default supabaseClient;
        