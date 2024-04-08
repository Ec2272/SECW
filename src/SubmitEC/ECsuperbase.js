import React, { useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const REACT_APP_SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const REACT_APP_ANON_KEY = "YOUR_SUPABASE_KEY";

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_ANON_KEY);

export default supabase