// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pgwzdhbxjtoslmjlsrtv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnd3pkaGJ4anRvc2xtamxzcnR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNjgyODAsImV4cCI6MjA1NzY0NDI4MH0.RIatnz1oTIvuvb8iv7_7gtaILAUv6oUa6dpUpfaHjD4";

export const supabase = createClient(supabaseUrl, supabaseKey);
